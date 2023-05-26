# Modificadores de Evento

A propagação do evento click será interrompida

```html
<a v-on:click.stop="doThis"></a>
```

O evento submit deixara de recarregar a página

```html
<form v-on:submit.prevent="onSubmit"></form>
```

Modificadores podem ser encadeados

```html
<a v-on:click.stop.prevent="doThat"></a>
```

É possível utilizar apenas o modificador

```html
<form v-on:submit.prevent></form>
```

Usar modo de captura ao adicionar o evento
ou seja, um evento em um elemento interno é tratado aqui
após ser tratado por aquele elemento

```html
<div v-on:click.capture="doThis">...</div>
```

Só aciona o manipulador se event.target é o próprio elemento
isto é, não aciona a partir de um elemento filho

```html
<div v-on:click.self="doThat">...</div>
```

O evento click será disparado apenas uma vez

```html
<a v-on:click.once="doThis"></a>
```

O comportamento padrão do evento scroll (rolar) acontecerá
imediatamente, ao invés de aguardar onScroll completar
para descobrir se ele chama event.preventDefault()

```html
<div v-on:scroll.passive="onScroll">...</div>
```
