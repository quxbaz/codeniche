#!/usr/bin/env python
# encoding: utf-8

import smtplib
from datetime import datetime

def send_email(username, password, from_address, to_address, message='message', subject='subject'):
    """
    Sends an email through using gmail as a mail server.

    @from_address
    The email address from which the message will be sent.

    @to_address
    An email address, or a list of meail addresses, of whom to send
    the message.
    """

    # Initialize the SMTP server.
    server=smtplib.SMTP('smtp.gmail.com:587')
    server.starttls()
    server.login(username, password)

    # Send email
    senddate=datetime.strftime(datetime.now(), '%Y-%m-%d')
    info="Date: %s\r\nFrom: %s\r\nTo: %s\r\nSubject: %s\r\nX-Mailer: My-Mail\r\n\r\n" % (senddate, from_address, to_address, subject)

    server.sendmail(from_address, to_address, info + message)
    server.quit()
