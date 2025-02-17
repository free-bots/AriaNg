(function () {
    'use strict';

    angular.module('ariaNg').constant('ariaNgConstants', {
        title: 'AriaNg',
        appPrefix: 'AriaNg',
        optionStorageKey: 'Options',
        languageStorageKeyPrefix: 'Language',
        settingHistoryKeyPrefix: 'History',
        languagePath: 'langs',
        languageFileExtension: '.txt',
        defaultLanguage: 'en',
        defaultHost: 'localhost',
        defaultSecureProtocol: 'https',
        defaultPathSeparator: '/',
        httpRequestTimeout: 20000,
        websocketAutoReconnect: true,
        globalStatStorageCapacity: 120,
        taskStatStorageCapacity: 300,
        lazySaveTimeout: 500,
        errorTooltipDelay: 500,
        notificationInPageTimeout: 2000,
        historyMaxStoreCount: 10,
        cachedDebugLogsLimit: 100,
        defaultConfigPath: 'config.json',
        defaultConfigStorageKey: 'fetchedDefaultConfig'
    }).constant('ariaNgDefaultOptions', {
        language: 'en',
        theme: 'dracula',
        title: '${downspeed}, ${upspeed} - ${title}',
        titleRefreshInterval: 5000,
        browserNotification: false,
        rpcAlias: '',
        rpcHost: '',
        rpcPort: '6800',
        rpcInterface: 'jsonrpc',
        protocol: 'http',
        httpMethod: 'POST',
        secret: '',
        extendRpcServers: [],
        globalStatRefreshInterval: 1000,
        downloadTaskRefreshInterval: 1000,
        keyboardShortcuts: true,
        swipeGesture: true,
        dragAndDropTasks: true,
        rpcListDisplayOrder: 'recentlyUsed',
        afterCreatingNewTask: 'task-list',
        removeOldTaskAfterRetrying: false,
        confirmTaskRemoval: true,
        includePrefixWhenCopyingFromTaskDetails: true,
        showPiecesInfoInTaskDetailPage: 'le10240',
        afterRetryingTask: 'task-list-downloading',
        displayOrder: 'default:asc',
        fileListDisplayOrder: 'default:asc',
        peerListDisplayOrder: 'default:asc',
        speedLimits: [
            {
                downloadLimit: 0,
                uploadLimit: 0
            }
        ]
    });
}());
