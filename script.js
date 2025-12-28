const target = new Date('2025-12-31T23:59:59')
const params = new URLSearchParams(location.search)
const forceUnlock = params.has('unlock')
const el = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  hint: document.getElementById('hint'),
  cta: document.getElementById('cta')
}
const countdownEl = document.querySelector('.countdown')
const cardEl = document.querySelector('.card')
function fmt(n){return String(n).padStart(2,'0')}
function diff(now, end){
  const ms = Math.max(0, end - now)
  const s = Math.floor(ms/1000)
  const d = Math.floor(s/86400)
  const h = Math.floor((s%86400)/3600)
  const m = Math.floor((s%3600)/60)
  const sec = s%60
  return {ms,s,d,h,m,sec}
}
function update(){
  const now = new Date()
  const unlocked = forceUnlock || now >= target
  if(!unlocked){
    const t = diff(now, target)
    el.days.textContent = fmt(t.d)
    el.hours.textContent = fmt(t.h)
    el.minutes.textContent = fmt(t.m)
    el.seconds.textContent = fmt(t.sec)
    el.hint.textContent = t.d<3?'¡Falta muy poco!':'Preparando algo especial…'
    if(!el.cta.hasAttribute('disabled')) el.cta.setAttribute('disabled','')
    return
  }else{
    el.days.textContent = '00'
    el.hours.textContent = '00'
    el.minutes.textContent = '00'
    el.seconds.textContent = '00'
    el.hint.textContent = '¡Ya puedes entrar!'
    const url = el.cta.getAttribute('data-target-url')||'#'
    el.cta.removeAttribute('disabled')
    el.cta.classList.add('unlocked')
    el.cta.onclick = ()=>location.href=url
    confetti()
    clearInterval(tick)
  }
}
function confetti(){
  const colors = ['#ff4d6d','#e9a33b','#7cf7ff','#9cff6b','#ffd166','#06d6a0','#f72585']
  const layer = document.createElement('div')
  layer.className = 'confetti'
  const count = 120
  for(let i=0;i<count;i++){
    const piece = document.createElement('div')
    piece.className = 'piece'
    const x = Math.round(Math.random()*100)+'vw'
    const r = Math.round(Math.random()*720)+'deg'
    const color = colors[Math.floor(Math.random()*colors.length)]
    piece.style.background = color
    piece.style.borderRadius = Math.random()>.5?'50%':'2px'
    piece.style.transform = `translate(${x}, -10vh)`
    piece.style.setProperty('--x',x)
    piece.style.setProperty('--r',r)
    piece.style.animation = `fall ${3+Math.random()*2}s linear forwards`
    layer.appendChild(piece)
  }
  document.body.appendChild(layer)
  setTimeout(()=>layer.remove(),6000)
}
const tick = setInterval(update,200)
update()

