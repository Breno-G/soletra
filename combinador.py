from itertools import product
import unicodedata

def remover_acentos(palavra):
    # Normaliza a palavra para decompor acentos e caracteres especiais
    nfkd = unicodedata.normalize('NFKD', palavra)
    # Mantém apenas os caracteres que não são marcas de acento
    return ''.join(c for c in nfkd if not unicodedata.combining(c))

arquivos = ["conjugações.txt", "lexico.txt", "palavras_portugues.txt", "verbos.txt"]

dicionario = set()
for arquivo in arquivos:
    with open(arquivo, "r", encoding="utf-8") as f:
        for p in f:
            p = p.strip().lower()
            p_sem_acentos = remover_acentos(p)
            dicionario.add(p_sem_acentos)


# 2. Define o conjunto de letras
letras = ['a', 'b', 'h', 'i', 'n', 's', 't']
tamanho = 9

# 3. Gera permutações
for p in product(letras, repeat=tamanho):
    palavra = ''.join(p)
    # 4. Verifica se a palavra existe no dicionário
    if palavra in dicionario:
        print("Encontrada:", palavra)