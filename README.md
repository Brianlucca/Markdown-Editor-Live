# Editor Markdown Pro 📝✨

## Sobre o Projeto

O **Markdown Editor Live** é uma ferramenta web interativa projetada para simplificar a escrita em Markdown. Ele oferece uma interface limpa com dois painéis lado a lado: um para você digitar seu texto e outro que mostra, em tempo real, como esse texto ficará formatado.

O objetivo é fornecer um ambiente de edição produtivo e sem distrações, ideal para criar documentações (como este README!), anotações de estudo, posts para blogs ou qualquer tipo de texto que precise de uma formatação básica.

Para facilitar ainda mais, o editor conta com uma barra de ferramentas com botões para as formatações mais comuns e opções para baixar seu trabalho como um arquivo `.md` ou `.pdf`. Todo o seu progresso é salvo automaticamente no navegador, para que você nunca perca seu trabalho.

## Como Criar um Markdown (Guia Rápido)

Markdown é uma sintaxe de formatação de texto simples e intuitiva. Abaixo estão os exemplos mais comuns que você pode usar neste editor.

---

### Títulos

Para criar títulos, use o símbolo `#`. A quantidade de `#` define o nível do título.

```markdown
# Título de Nível 1 (O maior)
## Título de Nível 2
### Título de Nível 3
#### Título de Nível 4
```

---

### Estilos de Texto

Você pode facilmente deixar textos em negrito, itálico ou com outros estilos.

* **Negrito:** Envolva o texto com dois asteriscos `**` ou dois underscores `__`.
    * Exemplo: `**Texto em negrito**` se torna **Texto em negrito**.
* **Itálico:** Envolva o texto com um asterisco `*` ou um underscore `_`.
    * Exemplo: `*Texto em itálico*` se torna *Texto em itálico*.
* **Negrito e Itálico:** Combine os dois.
    * Exemplo: `***Texto importante***` se torna ***Texto importante***.
* **Tachado (Riscado):** Envolva o texto com dois tils `~~`.
    * Exemplo: `~~Texto riscado~~` se torna ~~Texto riscado~~.

---

### Listas

#### Listas Não Ordenadas

Use um asterisco `*`, um sinal de mais `+` ou um hífen `-` no início da linha.

```markdown
* Primeiro item
* Segundo item
  * Sub-item (adicione dois espaços para indentar)
- Outro item na lista
```

#### Listas Ordenadas

Use números seguidos de um ponto.

```markdown
1. Primeiro passo
2. Segundo passo
3. Terceiro passo
```

---

### Links

A sintaxe para links é `[texto que vai aparecer](URL do link)`.

```markdown
Visite o [Google](https://www.google.com) para fazer uma busca.
```

---

### Imagens

A sintaxe é parecida com a de links, mas com um `!` no início: `![texto alternativo](URL da imagem)`.

```markdown
![Logo do React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
```

---

### Citações

Para criar um bloco de citação, use o sinal de maior que `>` no início da linha.

```markdown
> Esta é uma citação. Tudo que vier depois do sinal será formatado
> como parte do mesmo bloco de citação.
```

---

### Código

* **Código Inline:** Para destacar um pequeno trecho de código no meio de uma frase, envolva-o com um acento grave `` ` ``.
    * Exemplo: Use a função `console.log()` para exibir mensagens.

* **Bloco de Código:** Para blocos maiores de código, envolva-os com três acentos graves ``` `` ```. Você pode especificar a linguagem de programação para ter destaque de sintaxe (syntax highlighting).

    ```markdown
    ```javascript
    function greet(name) {
      console.log(`Hello, ${name}!`);
    }
    greet('Mundo');
    ```
    ```

---

### Linha Horizontal

Para criar uma linha divisória, use três ou mais hífens `---`, asteriscos `***` ou underscores `___` em uma linha separada.

```markdown
Texto acima da linha.

---

Texto abaixo da linha.
```