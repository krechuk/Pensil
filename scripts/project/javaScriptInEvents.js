

const scriptsInEvents = {

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
		runtime.globalVars.UserPhoto = user?.photo_url || "";
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
