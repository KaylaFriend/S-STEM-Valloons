<nav class="navbar navbar-light bg-light justify-content-between sticky-top navbar-expand-md">
	<div class="container">
		<a class="navbar-brand" href="/valloons_dev"><img src="media/logo.png" class="logo" alt="Valloons"></a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle Navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarToggler">
			<ul class="navbar-nav ml-auto">
<?php
if ($_SESSION['loggedin'])
{
	echo('<li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			<img src="media/avatar.png" class="menu-prof" alt="profile">
		</a>
		<div class="dropdown-menu" aria-labelledby="navbarDropdown">
			<a class="dropdown-item" href="dashboard.php">Dashboard</a>
			<a class="dropdown-item" href="profile.php">Profile</a>
			<a class="dropdown-item" href="logout.php">Logout</a>
		</div>
	</li>');
} else {
	echo('<li class="nav-item"><a class="nav-link" href="/valloons_dev">Login</a></li>');
}
?>
			</ul>
		</div>
	</div>
</nav>

