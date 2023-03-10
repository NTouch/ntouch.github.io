export function starCreator() {
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70}
    });

    stars.children.iterate(function (child) {
        child.setBounceY(phaser.Math.FloatBetween(0.4, 0.8))
    });

    return stars;
}