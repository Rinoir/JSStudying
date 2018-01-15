var j;
outer:
for (var i = 2; i <= 10; i++){
	for (j = 2; j < i; j++){
		if (i % j == 0) continue outer;
	}

	alert (i);
}