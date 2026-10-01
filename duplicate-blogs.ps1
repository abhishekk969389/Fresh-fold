$path = 'app\data\data.json'
$json = Get-Content $path -Raw | ConvertFrom-Json
$posts = $json.blog.posts
if ($posts.Count -eq 3) {
    $newPosts = @()
    foreach ($p in $posts) {
        $newPosts += $p
    }
    foreach ($p in $posts) {
        $newP = [pscustomobject]@{
            id = $p.id + "_copy"
            image = $p.image
            date = $p.date
            category = $p.category
            title = $p.title
            description = $p.description
            author = $p.author
            readTime = $p.readTime
        }
        $newPosts += $newP
    }
    $json.blog.posts = $newPosts
    $json | ConvertTo-Json -Depth 10 | Out-File -FilePath $path -Encoding UTF8
    Write-Host "Added 3 posts. Total: $($json.blog.posts.Count)"
} else {
    Write-Host "Already has $($posts.Count) posts. No action needed."
}
