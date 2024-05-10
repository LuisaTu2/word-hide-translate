from flask import Flask, render_template

# [EB] EB looks for an 'application' callable by default.
application = Flask(__name__)

@application.route("/")
def word_hide(name=None):
    return render_template('index.html', name=name)


if __name__ == "__main__":
    # setting debug to True enables debug output. 
    # this line should be removed before deploying a production app.
    application.debug = True
    application.run()


# HOW TO RUN
# activate venv with python 3.11
# cd to root folder
# flask --app application run --debug

# PUSH TO EB
# cd to root/app of project
# eb init -p python-3.11 word-hide --region us-west-2
# eb deploy
# eb open 
# THIS TERMINATES THE ENVT: eb terminate flask-env
