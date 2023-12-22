<?php

$directory = __DIR__; // Get the current directory

// Get all files in the directory
$files = scandir($directory);

// Filter files to include only .js and .css files and exclude those with *backup* and *dev.* in the name
$filteredFiles = array_filter($files, function ($file) {
    $extension = pathinfo($file, PATHINFO_EXTENSION);
    $fileName = pathinfo($file, PATHINFO_FILENAME);
    
    return (
        ($extension === 'js' || $extension === 'css') &&
        strpos($fileName, 'backup') === false &&
        strpos($fileName, 'dev') === false
    );
});

// Sort the filtered files by extension and then by filename
usort($filteredFiles, function ($a, $b) {
    $extComparison = strcmp(pathinfo($a, PATHINFO_EXTENSION), pathinfo($b, PATHINFO_EXTENSION));
    return $extComparison !== 0 ? $extComparison : strcmp($a, $b);
});

// Group the files by extension
$groupedFiles = [];
foreach ($filteredFiles as $file) {
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $groupedFiles[$ext][] = $file;
}

// Print the formatted JavaScript array
echo "const array = [\n";
foreach ($groupedFiles as $ext => $files) {
    echo "\n";
    foreach ($files as $file) {
        echo "  \"$file\",\n";
    }
}
echo "];\n";

?>
