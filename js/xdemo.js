
$(function(){
	var themes = [
	{value:'default',text:'Default',group:'Base'},
	{value:'gray',text:'Gray',group:'Base'},
	{value:'metro',text:'Metro',group:'Base'},
	{value:'material',text:'Material',group:'Base'},
	{value:'material-teal',text:'Material Teal',group:'Base'},
	{value:'material-blue',text:'Material Blue',group:'Base'},
	{value:'bootstrap',text:'Bootstrap',group:'Base'},
	{value:'black',text:'Black',group:'Base'},
	{value:'metro-blue',text:'Metro Blue',group:'Metro'},
	{value:'metro-gray',text:'Metro Gray',group:'Metro'},
	{value:'metro-green',text:'Metro Green',group:'Metro'},
	{value:'metro-orange',text:'Metro Orange',group:'Metro'},
	{value:'metro-red',text:'Metro Red',group:'Metro'},
	{value:'ui-cupertino',text:'Cupertino',group:'UI'},
	{value:'ui-dark-hive',text:'Dark Hive',group:'UI'},
	{value:'ui-pepper-grinder',text:'Pepper Grinder',group:'UI'},
	{value:'ui-sunny',text:'Sunny',group:'UI'}
	];
	$('#demo').panel();
	$('#cb-theme').combobox({
		groupField:'group',
		data: themes,
		editable:false,
		panelHeight:'auto',
		onChange:onChangeTheme,
		onLoadSuccess:function(){
			$(this).combobox('setValue', 'material-teal');
		}
	});
	var dp = $('#demo').offset();
	if ($('#ck-rtl').is(':checked')){
		$('body').addClass('demo-rtl');
	}
	$('#setting').bind('click', function(e){
		e.stopPropagation();
	});
});
function onLoad(data){
	data = data.replace(/(\r\n|\r|\n)/g, '\n');
	data = data.replace(/\t/g, '    ');
	$('#code').html('<pre name="code" class="prettyprint linenums" style="border:0"></pre>');
	$('#code').find('pre').text(data);
	prettyPrint();
}
function onChangeTheme(theme){
	var link = $('#content').find('link:first');
	link.attr('href', '/easyui/themes/'+theme+'/easyui.css');
}
var currPlugin = 'Application';
var currPageItem = 'Basic CRUD';
function open1(url,a){
	currPageItem = $(a).text();
	$('body>div.menu-top').menu('destroy');
	$('body>div.window>div.window-body').window('destroy');
	$('#demo').panel('refresh',url);
}
function open2(plugin){
	if (plugin){
		currPlugin = plugin;
		currPageItem = '';
	}
	var href = '?plugin=' + currPlugin + '&theme=' + $('#cb-theme').combobox('getValue');
	href += '&dir=' + ($('#ck-rtl').is(':checked')?'rtl':'ltr');
	href += '&pitem=' + currPageItem;
	href += '&sort=asc';
	location.href = href;
}