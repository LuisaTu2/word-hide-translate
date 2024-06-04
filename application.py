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


# The environment "word-hide-env" and all associated instances will be terminated.
# To confirm, type the environment name: word-hide-env
# 2024-05-15 00:15:38    INFO    terminateEnvironment is starting.
# 2024-05-15 00:15:38    INFO    Validating environment's EC2 instances have termination protection disabled before performing termination.
# 2024-05-15 00:15:39    INFO    Finished validating environment's EC2 instances for termination protection.
# 2024-05-15 00:15:56    INFO    Deleted CloudWatch alarm named: awseb-e-ertczum9cd-stack-AWSEBCloudwatchAlarmHigh-hV8uoo5RtIId 
# 2024-05-15 00:15:56    INFO    Deleted CloudWatch alarm named: awseb-e-ertczum9cd-stack-AWSEBCloudwatchAlarmLow-GtyBvhtkXSvj 
# 2024-05-15 00:15:56    INFO    Deleted Load Balancer listener named: arn:aws:elasticloadbalancing:us-west-2:076464304553:listener/app/awseb--AWSEB-UhNEU3B03lA1/acbbfbc719a58bbc/8494c6229b155b06
# 2024-05-15 00:15:56    INFO    Deleted Auto Scaling group policy named: arn:aws:autoscaling:us-west-2:076464304553:scalingPolicy:669b0cab-5c11-4d03-af0a-2ffdaec64669:autoScalingGroupName/awseb-e-ertczum9cd-stack-AWSEBAutoScalingGroup-Vg0RZxfNtFOW:policyName/awseb-e-ertczum9cd-stack-AWSEBAutoScalingScaleUpPolicy-mImmCUyAvYsA
# 2024-05-15 00:15:56    INFO    Deleted Auto Scaling group policy named: arn:aws:autoscaling:us-west-2:076464304553:scalingPolicy:08cd143d-9673-46ba-8857-4fef419e6c48:autoScalingGroupName/awseb-e-ertczum9cd-stack-AWSEBAutoScalingGroup-Vg0RZxfNtFOW:policyName/awseb-e-ertczum9cd-stack-AWSEBAutoScalingScaleDownPolicy-DHdXC2mzn99S
# 2024-05-15 00:15:56    INFO    Waiting for EC2 instances to terminate. This may take a few minutes.
