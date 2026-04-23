<?php
try {
    // Override Laravel Cache Paths for Vercel (Read-Only Filesystem Fix)
    putenv('APP_SERVICES_CACHE=/tmp/services.php');
    putenv('APP_PACKAGES_CACHE=/tmp/packages.php');
    putenv('APP_CONFIG_CACHE=/tmp/config.php');
    putenv('APP_ROUTES_CACHE=/tmp/routes.php');
    putenv('APP_EVENTS_CACHE=/tmp/events.php');

    // Trick Laravel into thinking it's running from the root instead of /api
    $_SERVER['SCRIPT_NAME'] = '/index.php';
    $_SERVER['SCRIPT_FILENAME'] = __DIR__ . '/../public/index.php';
    $_SERVER['PHP_SELF'] = '/index.php';

    require __DIR__ . '/../public/index.php';
} catch (\Throwable $e) {
    http_response_code(500);
    echo "<h1>Vercel Critical Boot Error</h1>";
    echo "<p><strong>Message:</strong> " . $e->getMessage() . "</p>";
    echo "<pre>" . $e->getTraceAsString() . "</pre>";
    $prev = $e->getPrevious();
    while ($prev) {
        echo "<h2>Caused by:</h2>";
        echo "<p><strong>Message:</strong> " . $prev->getMessage() . "</p>";
        echo "<pre>" . $prev->getTraceAsString() . "</pre>";
        $prev = $prev->getPrevious();
    }
}
