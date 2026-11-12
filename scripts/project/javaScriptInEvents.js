

const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.ready();
		let user = window.Telegram.WebApp.initDataUnsafe.user;
		if (user) {
		    // Сохраняем ID и username в глобальные переменные Construct 3 (предварительно созданные в проекте)
		    runtime.globalVars.TelegramID = user.id;
		    runtime.globalVars.TelegramUsername = user.username || "";
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
