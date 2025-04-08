import random
from flask import Flask, render_template

app = Flask(__name__)

frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "Nunca te rindas, lo mejor está por venir.",
    "Cree en ti y todo será posible.",
    "Cada día es una nueva oportunidad para mejorar.",
    "La constancia es la clave del éxito."
]

@app.route("/")
def frase():
    frase_aleatoria = random.choice(frases)
    return render_template("index.html", frase=frase_aleatoria)

if __name__ == "__main__":
    app.run(debug=True, port=5050)