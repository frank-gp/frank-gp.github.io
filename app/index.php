<?php

$directory = __DIR__; // Get the current directory

// Get all entries in the directory (files and subdirectories)
$entries = scandir($directory);

// Filter entries to include only directories, exclude special directories like '.' and '..', and exclude the ".git" folder
$directories = array_filter($entries, function ($entry) use ($directory) {
    return is_dir($directory . '/' . $entry) && $entry != '.' && $entry != '..' && $entry != '.git';
});

// Sort the directory names alphabetically
sort($directories);

// Print the formatted JavaScript array
echo "const array = [\n";
foreach ($directories as $folder) {
    echo "  \"$folder\",\n";
}
echo "];\n";

?>
