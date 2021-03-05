import UnderConstruction from './components/UnderConstruction.svelte'
import App from './components/App.svelte'

const Klass = window.localStorage.getItem('v2') || window.location.href.includes('localhost') ? App : UnderConstruction

let app = new Klass({
  target: document.body,
})

export default Klass
