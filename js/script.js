/* #6 start the #external #action and say hello */
console.log("App is alive");
/**
/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';
    
    /* #6 #liking channels on #click */
    $('#channel-star').attr('src', 'https://ip.lfe.mw.tum.de/sections/star-o.png');

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
       $('#section-channel-list li').removeClass('selected');
       $('#section-channel-list li:contains(' + channelName + ')').addClass('selected');
}


/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}


/**
 * toggle (show/hide) the emojis menu when clicking btn smiley
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}