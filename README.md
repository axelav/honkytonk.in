# Honky Tonkin' - https://honkytonk.in

## cool things about choo

it uses bel, which gives you a dom basically. if you render on the server, it
uses pelo, which is very fast & mainly works wonderfully 

under the hood bel replaces it's html method with a stringify method from pelo
that takes your html & renders it as a string. viola.

when it doesnt work is when you want to, say, render a string of html that you
converted from markdown. bel's docs recommend you create an Element & then put
your string of html on the Element's `innerHTML` prop:

```js
const frag = bel`<div></div>`
frag.innerHTML = '<p>whaddup</p>' 
```

returns

```html
<div></div>
```


## TODO

 - [ ] http://imaginarysphere.tumblr.com/archive
