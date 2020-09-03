import requests
import pandas, os
from twilio.rest import Client

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
twilio_number = os.getenv("TWILIO_NUMBER")

def send_sms_notification(to, message_body):
    client = Client(account_sid, auth_token)
    client.messages.create(to=to,
                           from_=twilio_number,
                           body=message_body)

def sendMessages():
    response = requests.get('https://docs.google.com/spreadsheets/d/1oRcFPlYSlevPyGm_8xeC4S_ZOtkux_wk96aVF-9hOd8/export?format=csv&gid=1622819468')
    f = open("contactSheet.csv","w")#write mode
    f.write(response.content.decode('ASCII'))
    f.close()

    df = pandas.read_csv("contactSheet.csv")
    contactList = df["What is your phone number?"].to_numpy()
    df = None

    r = requests.get(url="https://bu-covid19-api.herokuapp.com/current")
    data = r.json()
    key1 = list(data.keys())[0]
    positive = data[key1]["Daily"]["Positive"]
    isolated = data[key1]["Daily"]["Isolated"]

    msg = "There are " + str(positive) + " new positive cases today at BU"

    for c in contactList:
        send_sms_notification(c, msg)
