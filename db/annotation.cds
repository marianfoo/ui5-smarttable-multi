using { AdminService } from '../srv/admin-service';
using { GenreService } from '../srv/genre-service';



annotate AdminService.Books with @(
    UI: {
        LineItem: [
			{Value: title, Label:'Title'},
            {Value: stock, Label:'Stock'},
            {Value: price, Label:'Price'},
            {Value: descr, Label:'Quantity'},
		],
    }
);

annotate GenreService.Genres with @(
    UI: {
        LineItem: [
            {Value: name, Label:'Name'},
            {Value: descr, Label:'Description'},
        ],
    }
);