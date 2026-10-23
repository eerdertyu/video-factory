# Blogger Earnings — YouTube Shorts

A 60-second, 9:16 Russian-language Remotion project about why some creators monetize better than others.

## Render from GitHub
1. Open **Actions** → **Render Blogger Earnings Short** → **Run workflow**.
2. Wait for the workflow to finish successfully.
3. Open that run, scroll to **Artifacts**, and download `blogger-earnings-short-mp4`. Extract the ZIP to get the MP4.

No secrets or API keys are required. The workflow generates Russian neural narration with edge-tts, then renders and uploads the MP4.

## Video specs
- 1080×1920 vertical video, 30 fps, 60 seconds
- Animated kinetic typography and scene transitions
- Russian neural narration
- Change narration in `public/narration.txt`; edit scene text/timing in `src/Video.tsx`.

Review Remotion's current license terms before commercial use.
