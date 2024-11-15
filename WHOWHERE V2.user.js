// ==UserScript==
// @name         WHOWHERE V2
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  WhoWhere V2 created by ᴊᴜsᴛ ᴀʟɪᴋᴏᴏ &&  for GARTIC IO
// @author       ᴀʟɪᴋᴏᴏ
// @match        *://gartic.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gartic.io
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/499148/WHOWHERE%20V2.user.js
// @updateURL https://update.greasyfork.org/scripts/499148/WHOWHERE%20V2.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Sayfa yüklendiğinde betiği çalıştır
    console.log('Gartic.io WhoWhere hazirdir!');

    // HTML yapısını ekleyelim
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const header = document.createElement('header');
    header.innerHTML = '<h2>WhoWhere V2 by ᴊᴜsᴛ ᴀʟɪᴋᴏᴏ</h2>';
    overlay.append(header);

    const p = document.createElement('p');
    p.textContent = 'Hazırki Otağlar';
    overlay.append(p);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Bağla';
    closeButton.style.cssText = 'position: fixed; top: 10px; right: 10px; padding: 5px 10px; background-color: darkred; color: white; border: none; border-radius: 5px; cursor: pointer;';
    closeButton.onclick = () => {
        overlay.style.display = 'none';
        openButton.style.display = 'block';
    };
    overlay.append(closeButton);

    const openButton = document.createElement('button');
    openButton.textContent = 'Aç';
    openButton.style.cssText = 'position: fixed; bottom: 10px; right: 10px; padding: 5px 10px; background-color: darkgreen; color: white; border: none; border-radius: 5px; cursor: pointer; display: none; z-index: 9999;';
    openButton.onclick = () => {
        overlay.style.display = 'block';
        openButton.style.display = 'none';
    };
    document.body.append(openButton);

    const select = document.createElement('select');
    select.id = 'lg';
    select.innerHTML = `
        <option value="23" selected>Azərbaycanca</option>
        <option value="45">Bahasa Indonesia</option>
        <option value="11">Čeština</option>
        <option value="14">Deutsch</option>
        <option value="2">English</option>
        <option value="3">Español</option>
        <option value="4">Français</option>
        <option value="6">Italiano</option>
        <option value="44">Magyar</option>
        <option value="18">Nederlands</option>
        <option value="10">Polski</option>
        <option value="1">Português</option>
        <option value="58">Română</option>
        <option value="22">Slovenčina</option>
        <option value="13">Tiếng Việt</option>
        <option value="8">Türkçe</option>
        <option value="21">български език</option>
        <option value="7">Русский</option>
        <option value="40">עברית</option>
        <option value="19">العربية</option>
        <option value="34">فارسی</option>
        <option value="12">ภาษาไทย</option>
        <option value="16">中文 (简化字)</option>
        <option value="9">中文 (臺灣)</option>
        <option value="17">中文 (香港)</option>
        <option value="15">日本語</option>
        <option value="20">한국어</option>
        <option value="26">Afrikaans</option>
        <option value="55">Bahasa Melayu</option>
        <option value="30">Català</option>
        <option value="31">Dansk</option>
        <option value="33">Eesti</option>
        <option value="67">Esperanto</option>
        <option value="36">Føroyskt</option>
    `;
    select.onchange = function() {
        f(this.value);
    };
    overlay.append(select);

    const flexDiv = document.createElement('div');
    flexDiv.className = 'flex';
    overlay.append(flexDiv);

    const footer = document.createElement('footer');
    footer.innerHTML = '<p>All Rights Reserved © <span>&#169;</span> <span>&#174;</span></p>';
    footer.style.cssText = 'position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%); cursor: pointer;';
    footer.onclick = () => {
        alert('Telif Haqqları: Bu script, Gartic.io platformundaki aktiv otağları izləmək üçün @just_alikoo və tərəfindən yaradılmışdır. Bütün haqqları saxlıdır.');
    };
    overlay.append(footer);

    const changelogButton = document.createElement('button');
    changelogButton.textContent = 'Yeniliklər';
    changelogButton.style.cssText = 'position: fixed; bottom: 10px; right: 90px; padding: 5px 10px; background-color: darkslateblue; color: white; border: none; border-radius: 5px; cursor: pointer;';
    changelogButton.onclick = () => {
        const changelogOverlay = document.createElement('div');
        changelogOverlay.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; padding: 20px; background-color: darkslateblue; color: black; border: 1px solid black; border-radius: 10px; z-index: 10000;';

        const changelogContent = document.createElement('div');
        changelogContent.innerHTML = `
            <h3> Özəlliklər && Yeniliklər </h3>
            <p> WhoWhere V2 by ig: @just_alikoo:</p>
            <ul>
                <li>Translate </li>
                <li>Otağa daxil olma</li>
                <li>Otağ izləmə</li>
                <li>Tool links</li>
                <li> Yeni serverler</>
            </ul>
            <button id="closeChangelog">Mətni burdan bağla X</button>
        `;
        changelogOverlay.append(changelogContent);

        document.body.append(changelogOverlay);

        document.getElementById('closeChangelog').onclick = () => {
            document.body.removeChild(changelogOverlay);
        };
    };
    overlay.append(changelogButton);

    // Toplam odalar ve kullanıcıları gösteren sayaç
    const totalCountDisplay = document.createElement('div');
    totalCountDisplay.style.cssText = 'position: fixed; top: 50px; left: 10px; background-color: darkslateblue; color: white; padding: 5px 10px; border-radius: 5px; z-index: 9999;';
    document.body.append(totalCountDisplay);

    document.body.prepend(overlay);

    const style = document.createElement('style');
    style.textContent = `
        body {
            position: relative;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: gray;
            color: #f0f0f0;
            font-family: 'Inter', sans-serif;
            z-index: 9999;
            overflow-y: auto;
            text-align: center;
            padding: 20px;
        }

        h3 {
            margin: 8px 0;
            border-radius: 30px;
        }

        .flex {
            margin: 1rem auto;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px;
            border-radius: 20%;
        }

        .flex .flex-child {
            background-color: darkgray;
            padding: 8px 12px;
            min-width: 150px;
            border-radius: 30px;
        }

        .flex .flex-child img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 1px solid #666;
        }

        .users .user-info {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
        }

        .users .user-info p {
            margin-left: 4px;
            font-size: 12px;
            overflow-wrap: anywhere;
        }

        p {
            font-size: 14px;
        }

        footer p {
            font-size: 80%;
        }

        a {
            display: block;
            margin-top: 0.5rem;
            text-decoration: none;
            font-size: 14px;
            padding: 6px 8px;
            color: inherit;
            background-color: darkslateblue;
            border-radius: 30px;
            transition: .2s;
        }

        a:hover {
            opacity: 0.9;
        }

        a:active {
            opacity: 1;
        }

        select {
            font-size: 16px;
            font-family: Nunito;
            padding: 5px;
            background-color: darkslateblue;
            color: inherit;
            border-radius: 30px;
        }
    `;
    document.head.append(style);

    const fl = document.querySelector('.flex');

    let roomIds = [];

    function f(lang) {
        fetch('https://gartic.io/req/list?search=&language[]=' + lang)
            .then(res => res.json())
            .then(data => {
                const active = data.filter(room => room.quant > 0);
                if (active.length !== 0) {
                    fl.innerHTML = '';
                    for (let k = 0; k < active.length; k++) {
                        roomIds.push(active[k].id);

                        const flc = document.createElement('div');
                        flc.classList.add('flex-child');
                        fl.appendChild(flc);

                        const roomTag = document.createElement('h3');
                        const roomSubjIcon = document.createElement('img');
                        const inRoomPlayers = document.createElement('p');
                        const users = document.createElement('div');
                        const viewBtn = document.createElement('a');
                        const joinBtn = document.createElement('a');

                        users.classList.add('users');

                        roomTag.innerHTML = active[k].id.slice(1);
                        roomSubjIcon.src = `https://gartic.io/static/images/subjects/${active[k].subject}.svg`;
                        inRoomPlayers.innerHTML = `${active[k].quant} / ${active[k].max} ・ ${active[k].points} / ${active[k].goal}`;
                        viewBtn.href = `https://gartic.io/${active[k].code}/viewer`;
                        viewBtn.innerHTML = 'Otağı izlə';
                        viewBtn.target = '_blank';

                        joinBtn.href = `https://gartic.io/${active[k].code}`;
                        joinBtn.innerHTML = 'Otağa daxil ol';
                        joinBtn.target = '_blank';

                        fetch(`https://gartic.io/serverViewer?room=${active[k].code}`).then(rs => rs.text()).then(dt => {
                            const s = dt.slice(15, 16);
                            const ws = new WebSocket(`wss://server0${s}.gartic.io/socket.io/?EIO=3&transport=websocket`);

                            ws.onopen = () => {
                                ws.send(`42["12",{"v":20000,"sala":"${roomIds[k]}"}]`);
                            };

                            ws.onmessage = (m) => {
                                try {
                                    const d = JSON.parse(m.data.slice(2));
                                    if (d[0] == 5) {
                                        for (let i = 0; i < d[5].length; i++) {
                                            const userB = document.createElement('div');
                                            userB.classList.add('user-info');
                                            users.appendChild(userB);

                                            const userPp = document.createElement('img');
                                            const userName = document.createElement('p');

                                            userPp.src = d[5][i].foto ? d[5][i].foto : 'https://gartic.io/static/images/avatar/svg/0.svg';
                                            userName.innerHTML = d[5][i].nick;

                                            userB.append(userPp, userName);
                                        }
                                    }
                                } catch (err) {
                                    console.error(err);
                                }
                            };
                        });

                        flc.append(roomTag, roomSubjIcon, inRoomPlayers, users, viewBtn, joinBtn);
                    }


                    totalCountDisplay.textContent = `Total Otağ: ${active.length}, Total User: ${active.reduce((acc, curr) => acc + curr.quant, 0)}`;

                } else {
                    fl.innerHTML = '<h2>Seçilən dildə otağ yoxdur.</h2>';
                    totalCountDisplay.textContent = '';
                }
            });
    }


    f('23');

})();


