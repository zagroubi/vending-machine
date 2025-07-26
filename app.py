from flask import Flask, render_template, request, session, redirect, abort, url_for
import os

app = Flask(__name__)

app.secret_key = os.getenv("SECRET-KEY") or "youwillneverguess"

@app.route("/index")
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/admin", methods=["POST", "GET"])
def admin():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        session['username'] = username
        session['password'] = password

        if username == "admin" and password == "supersecurepassword":
            session['isadmin'] = True
            return redirect(url_for("dashboard"))
        else:
            session['isadmin'] = False
            return render_template("login.html", error="Invalid credentials.")

    else:
        return render_template("login.html")


@app.route("/dashboard")
def dashboard():
    if session.get("isadmin"):
        machines = [
            {
                "id": "SM-001",
                "location": "Bursa, Türkiye",
                "status": "Aktif",
                "temperature": "4°C",
                "stock": [
                    {"item": "Su", "count": 15},
                    {"item": "Gazoz", "count": 7},
                    {"item": "Çikolata", "count": 4},
                ]
            },
            {
                "id": "SM-002",
                "location": "Kastamonu, Türkiye",
                "status": "Pasif",
                "temperature": "N/A",
                "stock": [
                    {"item": "Su", "count": 2},
                    {"item": "Cips", "count": 0},
                ]
            },
            {
                "id": "SM-003",
                "location": "Ankara, Türkiye",
                "status": "Aktif",
                "temperature": "5°C",
                "stock": [
                    {"item": "Su", "count": 8},
                    {"item": "Gaziz", "count": 10},
                    {"item": "Sandviç", "count": 3},
                    {"item": "Cips", "count": 1},
                ]
            },
            {
                "id": "SM-004",
                "location": "Istanbul, Türkiye",
                "status": "Aktif",
                "temperature": "20°C",
                "stock": [
                    {"item": "Su", "count": 18},
                    {"item": "Gazoz", "count": 20},
                    {"item": "Sandviç", "count": 3},
                    {"item": "Cips", "count": 10},
                ]
            }
        ]
        return render_template("dashboard.html", machines=machines)
    else:
        abort(403) 


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
