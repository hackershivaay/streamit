import{r as resumeProgress}from"./presto-player.presto-playlist-item.presto-playlist-overlay.presto-playlist-ui-4b83d57f.js";import"./index-2bbac65f.js";import"./cache-cues-a3fc9c41.js";const learndash=e=>{"undefined"!=typeof learndash_video_data&&"presto"===learndash_video_data?.videos_found_provider&&(resumeProgress(e,!0),window.learndash_video_data.videos_auto_complete="on"===prestoPlayer?.learndash?.lesson_video_auto_complete,window.learndash_video_data.videos_hide_complete_button="AFTER"===learndash_video_data?.videos_shown&&"on"===prestoPlayer?.learndash?.lesson_video_hide_complete_button,window.learndash_video_data.videos_auto_complete_delay=prestoPlayer?.learndash?.lesson_video_auto_complete_delay,window.learndash_video_data.videos_auto_complete_delay_message=prestoPlayer?.learndash?.videos_auto_complete_delay_message,window.learndash_video_data.video_track_path="/",jQuery((function(){"1"===learndash_video_data.video_debug&&console.log("PRESTO: init"),document.querySelectorAll('presto-player[data-video-progression="true"][data-video-provider="'+learndash_video_data.videos_found_provider+'"]').length&&("1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(true)"),LearnDash_disable_assets(!0),LearnDash_watchPlayers(),document.querySelectorAll('presto-player[data-video-progression="true"][data-video-provider="'+learndash_video_data.videos_found_provider+'"]').forEach((function(e,a){console.log({element:e});var o="presto-player__wrapper-player-"+a,d=e.getAttribute("id");void 0!==d&&""!=d||(d=o,e.setAttribute("id",d)),ld_video_players[o]={},ld_video_players[o].player_key=o,ld_video_players[o].player_type=learndash_video_data.videos_found_provider,ld_video_players[o].player_id=d,ld_video_players[o].player_wrapper=e.closest("presto-player"),void 0!==ld_video_players[o].player_wrapper?ld_video_players[o].player_cookie_key=ld_video_players[o].player_wrapper.getAttribute("data-video-cookie-key"):ld_video_players[o].player_cookie_key="",ld_video_players[o].player_cookie_values=LearnDash_Video_Progress_initSettings(ld_video_players[o]),"complete"===LearnDash_Video_Progress_getSetting(ld_video_players[o],"video_state")?(LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd()):(wp.hooks.addAction("presto.playerTimeUpdate","presto-player",(e=>{"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is playing"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_duration",e.duration),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),e.duration&&e.duration===e.currentTime&&(LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","complete"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(false)"),LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd())})),wp.hooks.addAction("presto.playerPlaying","presto-player",(e=>{"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is playing"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_duration",e.duration),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","play")})),wp.hooks.addAction("presto.playerPause","presto-player",(e=>{"1"===learndash_video_data.video_debug&&console.log("PRESTO: Video is paused"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),console.log(e.duration),console.log(e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","pause")})),wp.hooks.addAction("presto.playerEnded","presto-player",(e=>{"1"===learndash_video_data.video_debug&&console.log("PRESTO: video ended"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: setting 'video_state' to 'complete'"),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_time",e.currentTime),LearnDash_Video_Progress_setSetting(ld_video_players[o],"video_state","complete"),"1"===learndash_video_data.video_debug&&console.log("PRESTO: calling LearnDash_disable_assets(false)"),LearnDash_disable_assets(!1),LearnDash_watchPlayersEnd()})))})))})))};export default learndash;