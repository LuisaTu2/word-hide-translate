from flask import Flask, render_template

# EB needs application by default
application = Flask(__name__)

@application.route("/")
def hello_world(name=None):
    return render_template('index.html', name=name)


# # add a rule for the index page.
# application.add_url_rule('/', 'index', (lambda: header_text +
#     say_hello() + instructions + footer_text))

if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()



#flask --app application run --debug