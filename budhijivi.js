const callerNumber = document.getElementById("contact"); 
const measuresTaken= document.getElementById("measures"); 
const theCause = document.getElementById("causes"); 

// ##########---START OF FIRST COLUMN----#########

// NO SIGNAL
const noSig = document.querySelector('.noSignal');
noSig.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
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
            args: [contactNo],
        }
    )
});

// INTERNET NOT WORKING SOLVED
const noIntS = document.querySelector('.noInternetSolved');
noIntS.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
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
            args: [contactNo,measure],
        }
    )
});

//SLOW INTERNET SOLVED
const slowS = document.querySelector('.slowBrowseSolved');
slowS.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
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
            args: [contactNo,measure],
        }
    )
});

//ACCOUNT EXTEND
const accExt = document.querySelector('.accountExtend');
accExt.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
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
            args: [contactNo],
        }
    )
});

//FOLLOW UP
const followup = document.querySelector('.followUp');
followup.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: followUp,
            args: [contactNo,measure,causes],
        }
    )
});

// ##########---END OF FIRST COLUMN----#########

// ##########---START OF SECOND  COLUMN----#########

// CHANNEL SCRATCHES
const scratchChnl = document.querySelector('.channelScratch');
scratchChnl.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: channelScratches,
            args: [contactNo],
        }
    )
});

// INTERNET NOT WORKING UNSOLVED
const noIntUn = document.querySelector('.noInternetUnsolved');
noIntUn.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
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
            args: [contactNo,causes],
        }
    )
});

//SLOW INTERNET UNSOLVED
const slowUn = document.querySelector('.slowBrowseUnsolved');
slowUn.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
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
            args: [contactNo,measure],
        }
    )
});

//SALES QUERIES
const queriesSales = document.querySelector('.salesQueries');
queriesSales.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: salesQueries,
            args: [contactNo],
        }
    )
});

//REMAINDER CALL
const remind = document.querySelector('.remainderCall');
remind.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
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
            args: [contactNo],
        }
    )
});

//###############-------END OF SECOND COLUMN---------############

//###############-------START OF THIRD COLUMN---------############

//CHANNELS MISSING
const missChnl = document.querySelector('.channelMissing');
missChnl.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: channelMissing,
            args: [contactNo],
        }
    )
});

//NO INTERNET OVCC
const noIntOvcc = document.querySelector('.noInternetOVCC');
noIntOvcc.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
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
            args: [contactNo],
        }
    )
});

//SLOW INTERNET OVCC
const slowOvcc = document.querySelector('.slownetOVCC');
slowOvcc.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: slowInternetOVCC,
            args: [contactNo],
        }
    )
});

//PAID BUT ACCOUNT STILL INACTIVE
const paidInactive = document.querySelector('.paidAccountInactive');
paidInactive.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
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
            args: [contactNo],
        }
    )
});

//FIELD ASSISTANCE NEEDED
const assistReq = document.querySelector('.assistanceNeeded');
assistReq.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
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
            args: [contactNo,causes],
        }
    )
});

//###############-------END OF THIRD COLUMN---------############

//###############-------START OF FOURTH COLUMN---------############

//PASSWORD CHANGE
const passwdChng = document.querySelector('.passwordChange');
passwdChng.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: passwordChange,
            args: [contactNo,measure],
        }
    )
});

//WIRE MANAGEMENT
const manageWire = document.querySelector('.wireManage');
manageWire.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: wireManagement,
            args: [contactNo],
        }
    )
});

//LAG WHILE GAMING
const gameLag = document.querySelector('.lagGaming');
gameLag.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: lagGaming,
            args: [contactNo,measure],
        }
    )
});

//ACCOUNT FREEZE
const holdAccount = document.querySelector('.accountFreeze');
holdAccount.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: freezeAccount,
            args: [contactNo],
        }
    )
});

//SUPPORT NOT ARRIVED
const noSupport = document.querySelector('.unarrivedSupport');
noSupport.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: supportUnarrived,
            args: [contactNo],
        }
    )
});

//###############-------END OF FOURTH COLUMN---------############

// START OF FUNCTIONS
function noSignal(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team, </br> As per conversation on " + caller +", the client has no signal displayed on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search and factory defaulting the STB, thus please perform the necessities asap.</br>Regards,</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function channelScratches(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team, </br> As per conversation on " + caller +", the client has scratched channels on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search, re-inserting the smart card and even factory defaulting the STB, thus please perform the necessities asap.</br>Regards,</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function channelMissing(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team, </br> As per conversation on " + caller +", the client has channels missing on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search and re-inserting the smart card, thus please perform the necessities asap.</br>Regards,</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function noInternetSolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on " +caller+ ", the client had lost connection. According to the client,"+measure+" has restored the connection.<br>Thank You!!!<br>The following data can be used for reference:"
}
function noInternetUnsolved(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on " +caller+ ", the client has lost connection. On further verification, " +cause+ " seems to be the root cause of the issue. Please perform the necessities asap.<br>Regards,<br>The following data can be used for reference:"
}
function wireManagement(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear RF/L1 Team,<br>As per conversation on "+caller+", the client has lost connection due to wire breakage and thus has requested for wire management. Please perform the necessities.<br>Regards,"
}
function noInternetOVCC(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear OVCC Team,<br>As per conversation on "+caller+", the client has lost connection. Please perform the necessities.<br>Regards,"
}
function slowInternetOVCC(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear OVCC Team,<br>As per conversation on"+caller+", the client has sluggish connection. Please perform the necessities.<br>Regards,"
}
function slowInternetSolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client had sluggish connection."+measure+"seems to have solved the issue according to the client. <br>Thank You!!!<br>The following data can be used for reference:"
}
function slowInternetUnsolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br> As per conversation on "+caller+", the client has sluggish connection. Unfortunately," +measure+ "didnot seem to have solved the issue according to the client. Please proceed accordingly.<br>Regards,<br> The following data can be used for reference: "
}
function lagGaming(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br> As per conversation on "+caller+", the client is facing high latency issue while online gaming. Unfortunately," +measure+ "didnot seem to have solved the issue according to the client. Please proceed accordingly.<br>Regards,<br> The following data can be used for reference: "
}
function accountExtend(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Sales Team,<br>As per conversation on "+caller+", the client wants to extend his subscription with promise to pay. Please proceed accordingly.<br>Regards, "
}
function salesQueries(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Sales Team,<br>As per conversation on "+caller+", the client has various sales related queries. Please provide the client with required information.<br>Regards, "
}
function paidAccountInactive(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client has already paid his subscription but his account is still inactive. Please perform the necessities asap.<br>Regards,"
}
function freezeAccount(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "##############--------------UNFREEZE THE ACCOUNT---------#############<br>Dear Team,<br>As per conversation on "+caller+", the client wants to reactivate the freezed account today. Please perform the necessities.<br>Regards,<br><br>##############--------------FREEZE THE ACCOUNT---------#############<br>Dear Team,<br>As per conversation on "+caller+", the client wants to have his account frozen until further notice. Please proceed accordingly.<br>Regards,"
}
function followUp(caller,measures,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client had " +cause+ " which had been restored successfully but the client is pessimistic about his connection remaining stable and thus has requested for a follow-up call at around " +measures+". Please provide the client with requested follow-up and required help.<br>Thank you!!<br>The following data can be used for reference:"
}
function assistanceRequired(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Rf Team,<br>As per conversation on "+caller+", the client needs help with "+cause+ ". The client being technically naive has requested for field support, thus please provide the client with required assistance.<br>Regards,"
}
function supportUnarrived(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Rf Team,<br>As per conversation on "+caller+", the client has not been provided with the promised field support yet. The client is very frustrated and has demanded an immediate support thus please proceed accordingly.<br>Regards,"
}
function remainderCall(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
    "Dear Team,<br>**********REMAINDER CALL RECEIVED************<br>As per conversation on "+caller+", the client's lost connection has not yet been restored. Please perform the necessities asap for the client is pretty infuriated.<br>Also, the client wants to get updates about the situation and the estimated restoration time of his connection thus, please proceed accordingly.<br>Regards,"
}
function passwordChange(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client wanted to change his WiFi password. The password has been changed successfully "+measure+". <br>Thank You!!"
}