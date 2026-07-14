import json
import re

from .llm import client, MODEL
from .prompts import SYSTEM_PROMPT

from .database import (
    get_doctor_history,
    save_interaction,
    update_latest_interaction,
    get_interaction_history,
)
# -------------------------
# Tool 1 - Log Interaction
# -------------------------

def log_interaction(message: str):

    completion = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": message
            }
        ],
        temperature=0,
        response_format={"type": "json_object"}
    )

    data = json.loads(
        completion.choices[0].message.content
    )

    print("LLM OUTPUT:", data)

    try:
        save_interaction(data)
        print("✅ Saved to MySQL")
    except Exception as e:
        print("❌ Database Error:", e)
        raise

    return data


# -------------------------
# Tool 2 - Edit Interaction
# -------------------------

def edit_interaction(message: str):

    completion = client.chat.completions.create(

        model=MODEL,

        messages=[
            {
                "role": "system",
                "content": """
You are editing an existing CRM interaction.

Return the response as valid JSON.

Return ONLY the fields that changed.

Example:

{
   "doctor_name":"Dr. Brown"
}
"""
            },
            {
                "role": "user",
                "content": message
            }
        ],

        temperature=0,

        response_format={
            "type":"json_object"
        }

    )

    data = json.loads(
        completion.choices[0].message.content
    )

    update_latest_interaction(data)

    return data

# -------------------------
# Tool 3 - AI Summary
# -------------------------

def get_summary(message: str):

    completion = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": """
Summarize the interaction in 2-3 professional sentences.
"""
            },
            {
                "role": "user",
                "content": message
            }
        ],
        temperature=0
    )

    return {
        "summary": completion.choices[0].message.content
    }


# -------------------------
# Tool 4 - Next Best Action
# -------------------------

def next_action(message: str):

    completion = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": """
You are a pharmaceutical sales coach.

Suggest the next best action after this interaction.

Return JSON:

{
   "next_action":"..."
}
"""
            },
            {
                "role": "user",
                "content": message
            }
        ],
        temperature=0,
        response_format={"type": "json_object"}
    )

    return json.loads(
        completion.choices[0].message.content
    )


# -------------------------
# Tool 5 - Interaction History
# -------------------------



def get_history(message):

    # Extract doctor name like:
    # Dr John
    # Dr. John
    # doctor John

    match = re.search(
        r"(?:dr\.?|doctor)\s+([A-Za-z]+)",
        message,
        re.IGNORECASE
    )

    if match:

        doctor = "Dr. " + match.group(1).capitalize()

        print("Searching history for:", doctor)

        history = get_doctor_history(doctor)

    else:

        print("Showing complete history")

        history = get_interaction_history()

    return {
        "history": history
    }