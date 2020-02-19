const form = document.getElementById('contactForm')
const url = 'https://xwl26e3s5i.execute-api.us-east-1.amazonaws.com/dev/email/send'
const submit = document.getElementById('submit')
const status = document.getElementById('status')
const requestSuccess = document.getElementById('success')
const requestError = document.getElementById('error')
const successClose = document.getElementById('success-close')
const errorClose = document.getElementById('error-close')

function post(url, body, callback)
{
	var req = new XMLHttpRequest();
	req.open("POST", url, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.addEventListener("load", function()
	{
		if (req.status < 400)
		{
			callback(null, JSON.parse(req.responseText));
		}
		else
		{
			callback(new Error("Request failed: " + req.statusText));
		}
	});
	req.send(JSON.stringify(body));
}

function success()
{
	requestSuccess.classList.add('success--shown')
	submit.blur()
	form.name.focus()
	form.name.value = ''
	form.email.value = ''
	form.content.value = ''
}

function error(err)
{
	errorSuccess.classList.add('error--shown')
	console.log(err)
}

function hideError()
{
	requestError.classList.remove('error--shown')
}

function hideSuccess()
{
	requestSuccess.classList.remove('success--shown')
}

form.addEventListener('submit', function(e)
{
	e.preventDefault()

	hideError();
	hideSuccess();
	status.classList.add('status--waiting')
	submit.disabled = true

	const payload =
	{
		name: form.name.value,
		email: form.email.value,
		content: form.content.value
	}

	post(url, payload, function (err, res)
	{
		status.classList.remove('status--waiting')
		submit.disabled = false

		if (err)
		{
			return error(err)
		}

		success()
	})
})

successClose.addEventListener('click', function(e)
{
	e.preventDefault()
	hideSuccess()
})

errorClose.addEventListener('click', function(e)
{
	e.preventDefault()
	hideError()
})