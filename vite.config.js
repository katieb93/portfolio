import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/Users/katiebrown/portfolio-site/src/assets/val 1.png',
        '/Users/katiebrown/portfolio-site/src/assets/Eight.png',
        '/Users/katiebrown/portfolio-site/src/assets/Five.png',
        '/Users/katiebrown/portfolio-site/src/assets/Four.png',
        '/Users/katiebrown/portfolio-site/src/assets/Nine.png',
        '/Users/katiebrown/portfolio-site/src/assets/One.png',
        '/Users/katiebrown/portfolio-site/src/assets/Seven.png',
        '/Users/katiebrown/portfolio-site/src/assets/Six.png',
        '/Users/katiebrown/portfolio-site/src/assets/Ten.png',
        '/Users/katiebrown/portfolio-site/src/assets/Three.png',
        '/Users/katiebrown/portfolio-site/src/assets/Two.png',
        '/Users/katiebrown/portfolio-site/src/assets/FirstAustinBlue.png',
        '/Users/katiebrown/portfolio-site/src/assets/FirstAustinBlueX.png',
        '/Users/katiebrown/portfolio-site/src/assets/helperbees_logo_trimmed 1.png',
        '/Users/katiebrown/portfolio-site/src/assets/LABlue.png',
        '/Users/katiebrown/portfolio-site/src/assets/NovelList.png',
        '/Users/katiebrown/portfolio-site/src/assets/PeterPan.png',
        '/Users/katiebrown/portfolio-site/src/assets/react.svg',
        '/Users/katiebrown/portfolio-site/src/assets/ReelDraftScreenShot.png',
        '/Users/katiebrown/portfolio-site/src/assets/Skybound_Entertainment_Logo 1.png',
        '/Users/katiebrown/portfolio-site/src/assets/Universal_Content_Productions.svg 1.png',
        // Add other paths here if more assets cause issues
      ],
    },
  },
})
