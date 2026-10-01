$path = 'app\data\data.json'
$json = Get-Content $path -Raw | ConvertFrom-Json

$json.works.steps[0] | Add-Member -MemberType NoteProperty -Name "paragraph" -Value "Schedule a pickup through our website, app or call. Select your preferred date and time, and our team will be at your doorstep to collect your clothes at your convenience." -Force
$json.works.steps[0] | Add-Member -MemberType NoteProperty -Name "bullets" -Value @("Easy online booking", "Flexible time slots", "Pickup from home, office or anywhere") -Force
$json.works.steps[0] | Add-Member -MemberType NoteProperty -Name "image" -Value @{ src = "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=600&auto=format&fit=crop"; alt = "Hand holding phone for laundry pickup" } -Force
$json.works.steps[0] | Add-Member -MemberType NoteProperty -Name "badge" -Value @{ icon = "FaCalendarAlt"; textLine1 = "Pick a Date"; textLine2 = "& Time" } -Force

$json.works.steps[1] | Add-Member -MemberType NoteProperty -Name "paragraph" -Value "Our friendly executive will pick up your laundry, carefully inspect the items and provide you a digital receipt. Your clothes are safely transported to our cleaning facility." -Force
$json.works.steps[1] | Add-Member -MemberType NoteProperty -Name "bullets" -Value @("Hassle-free pickup", "Safe and secure handling", "Real-time pickup updates") -Force
$json.works.steps[1] | Add-Member -MemberType NoteProperty -Name "image" -Value @{ src = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=600&auto=format&fit=crop"; alt = "Delivery person picking up clothes basket" } -Force
$json.works.steps[1] | Add-Member -MemberType NoteProperty -Name "badge" -Value @{ icon = "FaShoppingBasket"; textLine1 = "We Collect"; textLine2 = "From Your Doorstep" } -Force

$json.works.steps[2].description = "Your clothes are cleaned with care using advanced techniques."
$json.works.steps[2] | Add-Member -MemberType NoteProperty -Name "paragraph" -Value "We use premium detergents, fabric-friendly methods and advanced cleaning technology to remove dirt, stains and odours, keeping your clothes fresh, soft and long-lasting." -Force
$json.works.steps[2] | Add-Member -MemberType NoteProperty -Name "bullets" -Value @("Advanced cleaning techniques", "Stain & odour removal", "Care for all fabric types") -Force
$json.works.steps[2] | Add-Member -MemberType NoteProperty -Name "image" -Value @{ src = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=600&auto=format&fit=crop"; alt = "Folded clean towels" } -Force
$json.works.steps[2] | Add-Member -MemberType NoteProperty -Name "badge" -Value @{ icon = "FaShieldAlt"; textLine1 = "Premium Cleaning"; textLine2 = "For Fresh Results" } -Force

$json.works.steps[3] | Add-Member -MemberType NoteProperty -Name "paragraph" -Value "Once your clothes are ready, we carefully pack them and deliver them back to your doorstep - fresh, clean and ready to wear. On-time delivery, every time!" -Force
$json.works.steps[3] | Add-Member -MemberType NoteProperty -Name "bullets" -Value @("Neatly folded & packed", "On-time delivery", "Ready to wear") -Force
$json.works.steps[3] | Add-Member -MemberType NoteProperty -Name "image" -Value @{ src = "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop"; alt = "Delivery person handing over clean packed clothes" } -Force
$json.works.steps[3] | Add-Member -MemberType NoteProperty -Name "badge" -Value @{ icon = "FaTruck"; textLine1 = "Fresh Clothes"; textLine2 = "At Your Doorstep" } -Force

$json | ConvertTo-Json -Depth 10 | Out-File -FilePath $path -Encoding UTF8
$text = [System.IO.File]::ReadAllText($path)
[System.IO.File]::WriteAllText($path, $text, (New-Object System.Text.UTF8Encoding($False)))
