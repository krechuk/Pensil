const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.OnLayoutStart,
<<<<<<< HEAD
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.Every,
		C3.JavaScriptInEvents.EventSheet1_Event3_Act1,
=======
		C3.JavaScriptInEvents.EventSheet1_Event1_Act1,
		C3.Plugins.System.Cnds.EveryTick,
>>>>>>> 5a8af139e75d0be022b4260b75f98179d19526ea
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{UserID: 0},
	{UserName: 0},
<<<<<<< HEAD
	{Browser: 0}
=======
	{Browser: 0},
	{TelegramID: 0},
	{TelegramUsername: 0}
>>>>>>> 5a8af139e75d0be022b4260b75f98179d19526ea
];

self.InstanceType = {
	UserID: class extends self.ITextInstance {},
	UserName: class extends self.ITextInstance {},
	Browser: class extends self.IInstance {}
}