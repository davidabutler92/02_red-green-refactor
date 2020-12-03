const { fetchQuotes } = require('./fetchQuotes');



describe('fetchQuotes', () => {
    it('should return a sigle futurama quote', async () => {
        const quote = await fetchQuotes();
        expect(quote).toEqual({
            name: 'Bender',
            text: 'Bite my shiny metal ass.',
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        })
    });
});