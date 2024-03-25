import './join-us-form.css';

export default function JoinUsForm() {
	return (
		<div className="flex w-full justify-center h-auto my-7 ">
			<form className="join-us-form">
				<div className="w-full max-w-[576px] flex flex-col md:flex-row gap-6 items-center">
					<input type="text" name="name" placeholder="Name" />
					<input type="text" name="surname" placeholder="Surname" />
				</div>
				<div className="w-full max-w-[576px] flex flex-col md:flex-row gap-6 items-center">
					<input type="text" name="phone" placeholder="Phone" />
					<input type="text" name="email" placeholder="Email" />
				</div>
				<input type="text" name="departament" placeholder="Departament" />
				<textarea name="message" cols={30} rows={5} placeholder="Message"></textarea>
			</form>
		</div>
	);
}
