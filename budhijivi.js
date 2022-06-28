// NO SIGNAL
const noSig = document.querySelector('.noSignal');
noSig.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noSignal,
        }
    )
});

// INTERNET NOT WORKING SOLVED
const noIntS = document.querySelector('.noInternetSolved');
noIntS.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noInternetSolved,
        }
    )
});

// INTERNET NOT WORKING UNSOLVED
const noIntUn = document.querySelector('.noInternetUnsolved');
noIntUn.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noInternetUnsolved,
        }
    )
});

//SLOW INTERNET SOLVED
const slowS = document.querySelector('.slowBrowseSolved');
slowS.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: slowInternetSolved,
        }
    )
});

//SLOW INTERNET UNSOLVED
const slowUn = document.querySelector('.slowBrowseUnsolved');
slowUn.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: slowInternetUnsolved,
        }
    )
});

//ACCOUNT EXTEND
const accExt = document.querySelector('.accountExtend');
accExt.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: accountExtend,
        }
    )
});

//NO INTERNET OVCC
const noIntOvcc = document.querySelector('.noInternetOVCC');
noIntOvcc.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noInternetOVCC,
        }
    )
});

//PAID BUT ACCOUNT STILL INACTIVE
const paidInactive = document.querySelector('.paidAccountInactive');
paidInactive.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: paidAccountInactive,
        }
    )
});

//FIELD ASSISTANCE NEEDED
const assistReq = document.querySelector('.assistanceNeeded');
assistReq.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: assistanceRequired,
        }
    )
});

//REMAINDER CALL
const remind = document.querySelector('.remainderCall');
remind.addEventListener('click',async ()  => {
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: remainderCall,
        }
    )
});

// START OF FUNCTIONS
function noSignal() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team, </br> As per conversation on <|NUMBER|>, the client has no signal displayed on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search and factory defaulting the STB, thus please perform the necessities asap.</br>Regards,</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function noInternetSolved() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on <|NUMBER|>, the client had lost connection. According to the client, <|MEASURES APPLIED|> has restored the connection.<br>Thank You!!!<br>The following data can be used for reference:"
}
function noInternetUnsolved() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on <|NUMBER|>, the client has lost connection. On further verification, <|THE CAUSE|> seems to be the root cause of the issue. Please perform the necessities asap.<br>Regards,<br>The following data can be used for reference:"
}
function noInternetOVCC() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear OVCC Team,<br>As per conversation on <|NUMBER|>, the client has lost connection. Please perform the necessities.<br>Regards,"
}
function slowInternetSolved() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on <|NUMBER|>, the client had sluggish connection. <|MEASURES APPLIED|> seems to have solved the issue according to the client. <br>Thank You!!!<br>The following data can be used for reference:"
}
function slowInternetUnsolved() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br> As per conversation on <|NUMBER|>, the client has sluggish connection. Unfortunately, <|MEASURES APPLIED|> didnot seem to have solved the issue according to the client. Please proceed accordingly.<br>Regards,<br> The following data can be used for reference: "
}
function accountExtend() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Sales Team,<br>As per conversation on <|NUMBER|>, the client wants to extend his subscription with promise to pay. Please proceed accordingly.<br>Regards, "
}
function paidAccountInactive() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on <|NUMBER|>, the client has already paid his subscription but his account is still inactive. Please perform the nesessities asap.<br>Regards,"
}
function assistanceRequired() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Rf Team,<br>As per conversation on <|NUMBER|>, the client needs help with <|THE CAUSE|>. The client being technically naive has requested for field support, thus please provide the client with required assistance.<br>Regards,"
}
function remainderCall() {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>**********REMAINDER CALL RECEIVED************<br>As per conversation on <|NUMBER|>, the client's lost connection has not yet been restored. Please perform the necessities asap for the client is pretty infuriated.<br>Also, the client wants to get updates about the situation and the estimated restoration time of his connection thus, please proceed accordingly.<br>Regards,"
}