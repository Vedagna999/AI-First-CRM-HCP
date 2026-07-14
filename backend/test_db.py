from app.database import connection

if connection.is_connected():
    print("✅ Database Connected Successfully!")
else:
    print("❌ Connection Failed")