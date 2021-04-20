<script>
  import Contact from './Contact.svelte'
  import Education from './Education.svelte'
  import Fold from './Fold.svelte'
  import MinorsAndLanguages from './MinorsAndLanguages.svelte'
  import CV from './CV.svelte'
  import JobsAndInternships from './JobsAndInternships.svelte'
  
  if (window.localStorage.getItem('sendPostMessage')) {
    window.localStorage.removeItem('sendPostMessage');
    
    // Test postMessage cross-domain
    const kentekenCheckWindow = window.open("https://www-test.anwb.nl/wegenwacht/smart-driver/smart-driver-1a", "kenteken-check");
    kentekenCheckWindow.postMessage("Hello from a bear-ry world", window.location.origin);
  }
  

</script>

<Fold />
<CV />
<Education />
<JobsAndInternships />
<MinorsAndLanguages />
<Contact />

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  @layer base {
    @font-face {
      font-family: Raleway;
      font-weight: lighter;
      src: url(/fonts/Raleway-ExtraLight.ttf) format('ttf');
    }
    @font-face {
      font-family: Raleway;
      font-weight: 300;
      src: url(/fonts/Raleway-Light.ttf) format('ttf');
    }
    @font-face {
      font-family: Raleway;
      font-weight: normal;
      src: url(/fonts/Raleway-Regular.ttf) format('ttf');
    }
    @font-face {
      font-family: Raleway;
      font-weight: 500;
      src: url(/fonts/Raleway-Medium.ttf) format('ttf');
    }
    @font-face {
      font-family: Raleway;
      font-weight: 600;
      src: url(/fonts/Raleway-SemiBold.ttf) format('ttf');
    }
    @font-face {
      font-family: Raleway;
      font-weight: bold;
      src: url(/fonts/Raleway-Bold.ttf) format('ttf');
    }
    @font-face {
      font-family: Raleway;
      font-weight: bolder;
      src: url(/fonts/Raleway-ExtraBold.ttf) format('ttf');
    }
    @font-face {
      font-family: Raleway;
      font-weight: 100;
      src: url(/fonts/Raleway-Thin.ttf) format('ttf');
    }
  }
</style>
