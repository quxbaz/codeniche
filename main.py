from flask import Flask, render_template
# from conf import conf

app = Flask(__name__)
# app.config.from_object(conf)

@app.route('/')
@app.route('/<subpage>')
def home(subpage='home'):
    return render_template('main.html', subpage=subpage + '.html')

if __name__ == '__main__':
    app.run(host='localhost', debug=True)
