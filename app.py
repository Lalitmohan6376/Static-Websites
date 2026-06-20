from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/workout-plans")
def workout_plans():
    return render_template("workout-plans.html")


@app.route("/nutrition")
def nutrition():
    return render_template("nutrition.html")


@app.route("/schedule")
def schedule():
    return render_template("schedule.html")


@app.route("/success-stories")
def success_stories():
    return render_template("success-stories.html")


@app.route("/bmi")
def bmi():
    return render_template("bmi.html")


@app.route("/pricing")
def pricing():
    return render_template("pricing.html")


@app.route("/contact", methods=["GET", "POST"])
def contact():

    success_message = ""

    if request.method == "POST":

        full_name = request.form.get("full_name")
        email = request.form.get("email")
        phone = request.form.get("phone")
        message = request.form.get("message")

        if full_name and email and phone and message:
            success_message = (
                "Thank you! Your message has been submitted successfully."
            )

    return render_template("contact.html", success=True)

if __name__ == "__main__":
    app.run(debug=True)