const categories = (req, res) => {
    const data = [
        { slug: 'technology', name: 'Technology' },
        { slug: 'health', name: 'Health' },
        { slug: 'education', name: 'Education' },
        { slug: 'sports', name: 'Sports' },
        { slug: 'entertainment', name: 'Entertainment' }
    ];

    res.status(200).json(data);
}

module.exports = categories;