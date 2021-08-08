var ckeditor_assets = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':' + window.location.port: '');

CKEDITOR.plugins.addExternal( 'pbckcode', ckeditor_assets+'/ckeditor/plugins/pbckcode/', 'plugin.js' );

CKEDITOR.replace( 'ckeditor', {
    skin: 'moonodark,'+ckeditor_assets+'/ckeditor/skins/moonodark/',
    extraPlugins: 'pbckcode',
    toolbar: [
        [ 'Source' ], 
        [ 'clipboard', 'undo', '-', 'Cut', 'Copy', 'Paste','-', 'Undo', 'Redo', 'Preview' ],
        [ 'TextColor', 'Bold', 'Italic' ],
        [ 'Format', 'Font', 'FontSize' ],
        [ 'Image', 'Iframe' ],
        [ 'pbckcode' ]
   ]
} );
