from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    imie_i_nazwisko = "Dominik Stasiak"
    info = "Sexiest coder alive"
    link_do_github = "https://github.com/dominikstas"
    link_do_gitlab = "https://gitlab.com/Dminikx"
    adres_email = "d.stasiak115@gmail.com"

    return render_template('index.html',
                           imie_i_nazwisko=imie_i_nazwisko,
                           info=info,
                           link_do_github=link_do_github,
                           link_do_gitlab=link_do_gitlab,
                           adres_email=adres_email)

if __name__ == '__main__':
    app.run(debug=True)
