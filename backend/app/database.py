import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="12345678",
    database="ai_crm"
)

cursor = connection.cursor(dictionary=True)


def save_interaction(data):

    sql = """
    INSERT INTO interactions
    (
        doctor_name,
        hospital,
        interaction_type,
        interaction_date,
        interaction_time,
        attendees,
        topics,
        materials,
        follow_up,
        summary
    )

    VALUES
    (
        %s,%s,%s,%s,%s,%s,%s,%s,%s,%s
    )
    """

    values = (
        data.get("doctor_name"),
        data.get("hospital"),
        data.get("interaction_type"),
        data.get("date"),
        data.get("time"),
        data.get("attendees"),
        data.get("topics"),
        data.get("materials"),
        data.get("follow_up"),
        data.get("summary")
    )

    cursor.execute(sql, values)
    connection.commit()


def update_latest_interaction(data):

    fields = []
    values = []

    mapping = {
        "doctor_name": "doctor_name",
        "hospital": "hospital",
        "interaction_type": "interaction_type",
        "date": "interaction_date",
        "time": "interaction_time",
        "attendees": "attendees",
        "topics": "topics",
        "materials": "materials",
        "follow_up": "follow_up",
        "summary": "summary",
    }

    for key, value in data.items():

        if key in mapping:
            fields.append(f"{mapping[key]}=%s")
            values.append(value)

    if not fields:
        return

    sql = f"""
    UPDATE interactions
    SET {", ".join(fields)}
    WHERE id = (
        SELECT id
        FROM (
            SELECT MAX(id) AS id
            FROM interactions
        ) t
    )
    """

    cursor.execute(sql, values)
    connection.commit()


def get_interaction_history(limit=10):

    sql = """
    SELECT
        id,
        doctor_name,
        hospital,
        interaction_type,
        interaction_date,
        interaction_time,
        attendees,
        topics,
        materials,
        follow_up,
        summary,
        created_at
    FROM interactions
    ORDER BY created_at DESC
    LIMIT %s
    """

    cursor.execute(sql, (limit,))

    return cursor.fetchall()


def get_doctor_history(doctor_name):

    sql = """
    SELECT *
    FROM interactions
    WHERE doctor_name LIKE %s
    ORDER BY created_at DESC
    """

    cursor.execute(sql, (f"%{doctor_name}%",))

    return cursor.fetchall()