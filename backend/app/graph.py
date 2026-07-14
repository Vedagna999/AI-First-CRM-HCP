from langgraph.graph import StateGraph, END

from app.state import AgentState
from app.tools import (
    log_interaction,
    edit_interaction,
    get_summary,
    get_history,
    next_action
)


def router(state: AgentState):

    message = state["message"].lower()

    if "change" in message or "correct" in message or "sorry" in message:
        return "edit"

    if "summary" in message:
        return "summary"

    if "history" in message or "previous" in message:
        return "history"

    if "next" in message or "recommend" in message:
        return "next"

    return "log"


def log_node(state: AgentState):
    return {
        "result": log_interaction(state["message"])
    }


def edit_node(state: AgentState):
    return {
        "result": edit_interaction(state["message"])
    }


def history_node(state: AgentState):
    return {
        "result": get_history(state["message"])
    }


def summary_node(state: AgentState):
    return {
        "result": get_summary(state["message"])
    }


def next_node(state: AgentState):
    return {
        "result": next_action(state["message"])
    }


builder = StateGraph(AgentState)

builder.add_node("log", log_node)
builder.add_node("edit", edit_node)
builder.add_node("history", history_node)
builder.add_node("summary", summary_node)
builder.add_node("next", next_node)

builder.set_conditional_entry_point(router)

builder.add_edge("log", END)
builder.add_edge("edit", END)
builder.add_edge("history", END)
builder.add_edge("summary", END)
builder.add_edge("next", END)

graph = builder.compile()