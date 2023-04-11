import smtplib
import os
from email.message import EmailMessage

# Email configurations
# Set up the email server
smtp_server = 'smtp.gmail.com'
smtp_port = 587
sender_email = 'matheus.sasso17@gmail.com'
sender_password = os.getenv("EMAIL_PASSWORD")

# Set up the email message
recipient_email = 'rmatheus.sasso17@gmail.com'
message = EmailMessage()
message['Subject'] = 'Test email'
message['From'] = sender_email
message['To'] = recipient_email
message.set_content('This is a test email sent from Python using the EmailMessage class.')

# Send the email
try:
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(message)
    print('Email sent!')
except Exception as e:
    print(f'Error: {e}')