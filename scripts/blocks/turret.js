/*
const energyBall = extend(BasicBulletType,{});
energyBall.shootEffect = Fx.none;
energyBall.smokeEffect = Fx.none;
energyBall.speed = 10;
energyBall.lifetime = 100;
energyBall.damage = 999999999;

const c = extend(BasicBulletType,{});
c.shootEffect = Fx.none;
c.smokeEffect = Fx.none;
c.speed = 5;
c.lifetime = 15;
c.damage = 999999999;

const p = extend(BasicBulletType,{});//LiquidBulletType
//p.liquid = Vars.content.getByName(ContentType.liquid, "cheat-x250")
p.shootEffect = Fx.none;
p.smokeEffect = Fx.neoplasmSplat;
p.speed = 5;
p.lifetime = 15;
p.damage = 999999999;
const laser = extend(LaserBulletType, {
    damage: 999999999,
    length: 600,
    width: 8,
    lifetime: 60,
    colors: [Color.valueOf("ff0000"), Color.valueOf("ff5555"), Color.valueOf("ffaaaa")]
});

const laserTurret = extend(PowerTurret, "laser-turret", {
    init() {
        this.ammo(
            laser
        );
        this.super$init();
    },
    icons() {
        return [
            Core.atlas.find("block-3"),
            Core.atlas.find(this.name)
        ];
    }
});

laserTurret.buildType = prov(() => extend(PowerTurret.PowerTurretBuild, laserTurret, {}));
laserTurret.itemCapacity = 0;
laserTurret.range = 600;
laserTurret.reload = 1;
laserTurret.shots = 1;
laserTurret.health = 900000000;
laserTurret.powerUse = 10;
energyBall.fragBullets = 10;
energyBall.fragBullet = c;
p.fragBullets = 16;
c.fragBullet = p;

const turret = extend(ItemTurret,"turret",{
 init(){
  this.ammo(
    Vars.content.getByName(ContentType.item, "copper"), energyBall,
  );
  this.super$init();
 },
 icons(){
  return [
  Core.atlas.find("block-3"),
  Core.atlas.find(this.name)
  ];
 }
});
turret.buildType = prov(()=>extend(ItemTurret.ItemTurretBuild,turret,{
}));
turret.itemCapacity=100000000;
turret.range = 600;
turret.reload = 1;
turret.shots = 2;
turret.health = 900000000;*/


/*wispion = new LaserTurret("wispion"){{
            requirements(Category.turret, with(Items.copper, 1200, Items.lead, 350, Items.graphite, 300, Items.surgeAlloy, 325, Items.silicon, 325));
            shootEffect = Fx.shootBigSmoke2;
            shootCone = 40f;
            recoil = 4f;
            size = 4;
            shake = 2f;
            range = 195f;
            reload = 90f;
            firingMoveFract = 0.5f;
            shootDuration = 230f;
            shootSound = Sounds.laserbig;
            loopSound = Sounds.beam;
            loopSoundVolume = 2f;
            envEnabled |= Env.space;

            shootType = new ContinuousLaserBulletType(78){{
                length = 200f;
                hitEffect = Fx.hitwispion;
                hitColor = Pal.wispionHit;
                status = StatusEffects.melting;
                drawSize = 420f;
                timescaleDamage = true;

                incendChance = 0.4f;
                incendSpread = 5f;
                incendAmount = 1;
                ammoMultiplier = 1f;
            }};

            scaledHealth = 200;
            coolant = consumeCoolant(0.5f);
            consumePower(17f);
        }};*/

        const turret = extend(LaserTurret, "Wispion", {
            init() {
                this.ammo(
                    new ContinuousLaserBulletType(78, 200, {
                        hitEffect: Fx.hitwispion,
                        hitColor: Pal.wispionHit,
                        status: StatusEffects.melting,
                        drawSize: 420,
                        timescaleDamage: true,
                        incendChance: 0.4,
                        incendSpread: 5,
                        incendAmount: 1,
                        ammoMultiplier: 1
                    })
                );
                this.super$init();
            },
            icons() {
                return [
                    Core.atlas.find("block-3"),
                    Core.atlas.find(this.name)
                ];
            }
        });

        wispion.buildType = prov(() => extend(LaserTurret.LaserTurretBuild, wispion, {}));
        wispion.shootEffect = Fx.shootBigSmoke2;
        wispion.shootCone = 40;
        wispion.recoil = 4;
        wispion.size = 4;
        wispion.shake = 2;
        wispion.range = 195;
        wispion.reload = 90;
        wispion.firingMoveFract = 0.5;
        wispion.shootDuration = 230;
        wispion.shootSound = Sounds.laserbig;
        wispion.loopSound = Sounds.beam;
        wispion.loopSoundVolume = 2;
        wispion.envEnabled |= Env.space;
        wispion.scaledHealth = 200;
        wispion.coolant = consumeCoolant(0.5);
        wispion.consumePower(17);
