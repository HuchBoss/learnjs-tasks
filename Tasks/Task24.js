// Выполнится.

if (-1 || 0) alert( 'first' );

// Не выполнится
if (-1 && 0) alert( 'second' );

// Выполнится
if (null || -1 && 1) alert( 'third' );