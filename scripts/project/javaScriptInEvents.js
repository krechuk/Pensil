

const scriptsInEvents = {

<<<<<<< HEAD
	async EventSheet1_Event3_Act1(runtime, localVars)
	{
		const tg = window.Telegram.WebApp;
		tg.ready();
		
		const user = tg.initDataUnsafe?.user;
		const userId = user?.id;
		const firstName = user?.first_name;
		const username = user?.username;
		runtime.globalVars.UserID = userId;
		runtime.globalVars.UserName = firstName;
=======
	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.ready();
		let user = window.Telegram.WebApp.initDataUnsafe.user;
		if (user) {
		    // Сохраняем ID и username в глобальные переменные Construct 3 (предварительно созданные в проекте)
		    runtime.globalVars.TelegramID = user.id;
		    runtime.globalVars.TelegramUsername = user.username || "";
		}
>>>>>>> 5a8af139e75d0be022b4260b75f98179d19526ea
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
