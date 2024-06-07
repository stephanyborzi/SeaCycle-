def ValidUser():
    while True:
        indice = -1
        inputuser = input("Usuario: ")
        inputpass = input("Senha: ")
        for i in range(len(usuarios)):
            if usuarios[i] == inputuser:
                indice = i
                break
        if indice == -1:
            print("Usuario invalido")
        elif senhas[i] != inputpass:
            print("Senha invalida")
        else:
            return i
        
def input_in_list(lista, pergunta):
    while True:
        r = input(pergunta)
        if r in lista:
            return lista.index(r)
        else:
            print("Produto não encontrado. Tente novamente.")

def input_numeric(msg):
    while True:
        n = input(msg)
        if n.isnumeric():
            return int(n)
        else:
            print("Por favor, insira um número válido.")

def checar_cupom(lista, pergunta):
    while True:
        r = input(pergunta)
        if r in lista:
            return lista.index(r)
        else:
            print("Empresa não encontrada. Tente novamente.")

usuarios = ['user1','user2','user3']
senhas = ['1234','4321','6789']
userPts = [1200,450,800]
userValido = ValidUser()

produtos = ['Plástico', 'Alumínio', 'Vidro']
pontos = [500, 200, 100]
total_points = 0

while True:
    produto_index = input_in_list(produtos, 'O que vamos reciclar hoje? (Plástico, Alumínio, Vidro): ')
    quant = input_numeric('Digite a quantidade de unidades desses produtos: ')
    total_points += quant * pontos[produto_index]
    
    continuar = input('Você deseja continuar reciclando? (s/n) ').strip().lower()
    if continuar != 's':
        break
print(f"Você ganhou {total_points} pontos.")

empresa = ['Outback', 'Zara', 'Uber', 'Méqui', 'PizzaHut']
cupons = [20, 10, 30, 25, 5]
pontos_empresa = [9500, 35000, 4400, 2500, 200]

while True:
    empresa_index = checar_cupom(empresa, 'Você quer trocar seus pontos por qual cupom? (Outback, Zara, Uber, Méqui, PizzaHut): ')

    if total_points >= pontos_empresa[empresa_index]:
        total_points -= pontos_empresa[empresa_index]
        print(f"Você trocou {pontos_empresa[empresa_index]} pontos por um cupom de {empresa[empresa_index]} de {cupons[empresa_index]} % ")
    else:
        print(f"Você não tem pontos suficientes para trocar por um cupom de {empresa[empresa_index]}. Você precisa de {pontos_empresa[empresa_index]} pontos.")

    print(f'Sobrou {total_points} pts para você trocar por mais pontos')
    continuar_troca = input('Você deseja continuar trocando pontos por cupons? (s/n) ').strip().lower()
    if continuar_troca != 's':
        break
print('Muito obrigado por usar o SeaCycle')
