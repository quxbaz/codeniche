from flask import Flask, render_template, request
# from conf import conf
from send_email import send_email

app = Flask(__name__)
# app.config.from_object(conf)

@app.route('/mail', methods=['POST'])
def mail():
    username = 'enoughmutton'
    password = 'lastkick'
    from_address = request.form['field-email']
    to_address = 'long.live.vim@gmail.com'
    message = "Sender's email:\n{0}\n\nMessage:\n{1}".format(from_address, request.form['field-message'])
    subject = 'Codeniche contact form email'
    send_email(username, password, from_address, to_address, message, subject)
    return 'success'

@app.route('/')
@app.route('/<subpage>')
def home(subpage='home'):
    data = {'subpage': subpage}
    return render_template('main.html', data=data)

if __name__ == '__main__':
    app.run(host='localhost', debug=True)
