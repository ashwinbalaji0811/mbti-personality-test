<?php

use Typemill\Controllers\PageController;
use Typemill\Controllers\FormController;
use Typemill\Controllers\SetupController;
use Typemill\Controllers\AuthController;
use Typemill\Controllers\SettingsController;
use Typemill\Controllers\ContentBackendController;
use Typemill\Middleware\RedirectIfUnauthenticated;
use Typemill\Middleware\RedirectIfAuthenticated;
use Typemill\Middleware\RedirectIfNoAdmin;
use Typemill\Middleware\accessController;

if($settings['settings']['setup'])
{
	$app->get('/setup', SetupController::class . ':show')->setName('setup.show');
	$app->post('/setup', SetupController::class . ':create')->setName('setup.create');
}
else
{
	$app->get('/setup', AuthController::class . ':redirect');	
}
if($settings['settings']['welcome'])
{
	$app->get('/setup/welcome', SetupController::class . ':welcome')->setName('setup.welcome')->add(new RedirectIfUnauthenticated($container['router'], $container['flash']));
}
else
{
	$app->get('/setup/welcome', AuthController::class . ':redirect')->setName('setup.welcome');	
}

$app->post('/tm/formpost', FormController::class . ':savePublicForm')->setName('form.save');

$app->get('/tm', AuthController::class . ':redirect');
$app->get('/tm/login', AuthController::class . ':show')->setName('auth.show')->add(new RedirectIfAuthenticated($container['router'], $container['settings']));
$app->post('/tm/login', AuthController::class . ':login')->setName('auth.login')->add(new RedirectIfAuthenticated($container['router'], $container['settings']));
$app->get('/tm/logout', AuthController::class . ':logout')->setName('auth.logout')->add(new RedirectIfUnauthenticated($container['router'], $container['flash']));

$app->get('/tm/settings', SettingsController::class . ':showSettings')->setName('settings.show')->add(new accessController($container['router'], $container['acl'], 'system', 'view'));
$app->post('/tm/settings', SettingsController::class . ':saveSettings')->setName('settings.save')->add(new accessController($container['router'], $container['acl'], 'system', 'update'));

$app->get('/tm/themes', SettingsController::class . ':showThemes')->setName('themes.show')->add(new accessController($container['router'], $container['acl'], 'system', 'view'));
$app->post('/tm/themes', SettingsController::class . ':saveThemes')->setName('themes.save')->add(new accessController($container['router'], $container['acl'], 'system', 'update'));

$app->get('/tm/plugins', SettingsController::class . ':showPlugins')->setName('plugins.show')->add(new accessController($container['router'], $container['acl'], 'system', 'view'));
$app->post('/tm/plugins', SettingsController::class . ':savePlugins')->setName('plugins.save')->add(new accessController($container['router'], $container['acl'], 'system', 'update'));

$app->get('/tm/account', SettingsController::class . ':showAccount')->setName('user.account')->add(new accessController($container['router'], $container['acl'], 'user', 'view'));
$app->get('/tm/user/new', SettingsController::class . ':newUser')->setName('user.new')->add(new accessController($container['router'], $container['acl'], 'user', 'create'));
$app->post('/tm/user/create', SettingsController::class . ':createUser')->setName('user.create')->add(new accessController($container['router'], $container['acl'], 'user', 'create'));
$app->post('/tm/user/update', SettingsController::class . ':updateUser')->setName('user.update')->add(new accessController($container['router'], $container['acl'], 'user', 'update'));
$app->post('/tm/user/delete', SettingsController::class . ':deleteUser')->setName('user.delete')->add(new accessController($container['router'], $container['acl'], 'user', 'delete'));
$app->get('/tm/user/{username}', SettingsController::class . ':showUser')->setName('user.show')->add(new accessController($container['router'], $container['acl'], 'user', 'view'));
$app->get('/tm/users', SettingsController::class . ':listUser')->setName('user.list')->add(new accessController($container['router'], $container['acl'], 'userlist', 'view'));

$app->get('/tm/content/raw[/{params:.*}]', ContentBackendController::class . ':showContent')->setName('content.raw')->add(new accessController($container['router'], $container['acl'], 'content', 'view'));
$app->get('/tm/content/visual[/{params:.*}]', ContentBackendController::class . ':showBlox')->setName('content.visual')->add(new accessController($container['router'], $container['acl'], 'content', 'view'));
$app->get('/tm/content[/{params:.*}]', ContentBackendController::class . ':showEmpty')->setName('content.empty')->add(new accessController($container['router'], $container['acl'], 'content', 'view'));

foreach($routes as $pluginRoute)
{
	$method 	= $pluginRoute['httpMethod'];
	$route		= $pluginRoute['route'];
	$class		= $pluginRoute['class'];
	$resource 	= isset($pluginRoute['resource']) ? $pluginRoute['resource'] : NULL;
	$privilege 	= isset($pluginRoute['privilege']) ? $pluginRoute['privilege'] : NULL;

	if(isset($pluginRoute['name']))
	{
		$app->{$method}($route, $class)->setName($pluginRoute['name'])->add(new accessController($container['router'], $container['acl'], $resource, $privilege));
	}
	else
	{
		$app->{$method}($route, $class)->add(new accessController($container['router'], $container['acl'], $resource, $privilege));
	}
}

if($settings['settings']['setup'])
{
	$app->get('/[{params:.*}]', SetupController::class . ':redirect');	
}
elseif(isset($settings['settings']['access']) && $settings['settings']['access'] != '')
{
	$app->get('/[{params:.*}]', PageController::class . ':index')->setName('home')->add(new accessController($container['router'], $container['acl'], 'user', 'view'));
}
else
{
	$app->get('/[{params:.*}]', PageController::class . ':index')->setName('home');
}